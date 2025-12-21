"""Utility script to merge multiple CSV files with encoding fallbacks."""

import argparse
from pathlib import Path
from typing import Iterable, List, Sequence

import pandas as pd


ENCODINGS: Sequence[str] = ("cp949", "utf-8-sig", "utf-8")


def read_csv_with_fallback(csv_path: Path) -> pd.DataFrame:
    for encoding in ENCODINGS:
        try:
            return pd.read_csv(csv_path, encoding=encoding)
        except UnicodeDecodeError:
            continue
    raise UnicodeDecodeError(
        "csv", b"", 0, 0, f"Unable to decode {csv_path.name} with {ENCODINGS}"
    )


def merge_csv_files(csv_paths: Iterable[Path], output_path: Path) -> Path:
    frames: List[pd.DataFrame] = []
    for csv_path in csv_paths:
        frame = read_csv_with_fallback(csv_path)
        frame["source_file"] = csv_path.name
        frames.append(frame)

    merged = pd.concat(frames, ignore_index=True, sort=False)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    merged.to_csv(output_path, index=False, encoding="utf-8-sig")
    return output_path


def main() -> None:
    parser = argparse.ArgumentParser(description="Merge multiple CSV files into one.")
    parser.add_argument("csv_paths", nargs="+", help="Input CSV files to merge.")
    parser.add_argument(
        "-o",
        "--output",
        required=True,
        help="Path to the merged CSV that will be created.",
    )
    args = parser.parse_args()

    csv_paths = [Path(path).expanduser().resolve() for path in args.csv_paths]
    for csv_path in csv_paths:
        if not csv_path.exists():
            raise FileNotFoundError(f"CSV file not found: {csv_path}")

    output_path = Path(args.output).expanduser().resolve()
    result = merge_csv_files(csv_paths, output_path)
    print(f"Merged {len(csv_paths)} files into: {result}")


if __name__ == "__main__":
    main()
