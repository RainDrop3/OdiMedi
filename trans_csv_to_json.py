"""Convert healthcare CSV datasets to JSON via a simple CLI.

Usage:
    python trans_csv_to_json.py path/to/data.csv
    python trans_csv_to_json.py path/to/data.csv -o output.json
"""

import argparse
from pathlib import Path

import pandas as pd


ENCODINGS = ("cp949", "utf-8-sig", "utf-8")


def read_csv(csv_path: Path) -> pd.DataFrame:
    for encoding in ENCODINGS:
        try:
            return pd.read_csv(csv_path, encoding=encoding)
        except UnicodeDecodeError:
            continue
    raise UnicodeDecodeError(
        "csv", b"", 0, 0, f"Unable to decode {csv_path.name} with {ENCODINGS}"
    )


def convert_csv_to_json(csv_path: Path, json_path: Path) -> Path:
    json_path.parent.mkdir(parents=True, exist_ok=True)
    df = read_csv(csv_path)
    df.to_json(json_path, orient="records", force_ascii=False, indent=4)
    return json_path


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Convert CSV files to JSON.",
        formatter_class=argparse.RawTextHelpFormatter,
        epilog=(
            "Examples:\n"
            "  python trans_csv_to_json.py data.csv\n"
            "  python trans_csv_to_json.py data.csv -o result.json"
        ),
    )
    parser.add_argument("csv_path", help="Path to the source CSV file.")
    parser.add_argument(
        "-o",
        "--output",
        help="Optional JSON output path. Defaults to the CSV name with .json.",
    )
    args = parser.parse_args()

    csv_path = Path(args.csv_path).expanduser().resolve()
    if not csv_path.exists():
        raise FileNotFoundError(f"CSV file not found: {csv_path}")

    json_path = (
        Path(args.output).expanduser().resolve()
        if args.output
        else csv_path.with_suffix(".json")
    )

    print(f"Converting {csv_path} -> {json_path}")
    output_file = convert_csv_to_json(csv_path, json_path)
    print(f"JSON file created at: {output_file}")


if __name__ == "__main__":
    main()