class TableCsvExport {
    constructor(table, headers = true) {
        this.table = table;
        this.rows = Array.from(table.querySelectorAll("tr"));
        // Remove the first row if headers are not needed
        if (!headers && this.rows[0].querySelectorAll("th").length) {
            this.rows.shift();
        }
    }

    convertCsv() {
        const lines = [];
        const numCols = this._findLongestRowLength();
        for (const row of this.rows) {
            let line = "";
            for (let i = 0; i < numCols; i++) {
                if (row.children[i] !== undefined) {
                    line += TableCsvExport.parseCell(row.children[i]);
                }
                line += (i !== (numCols - 1)) ? "|" : "";
            }
            lines.push(line);
        }
        return lines.join("\n");
    }

    _findLongestRowLength() {
        return this.rows.reduce((maxLength, row) => {
            return row.childElementCount > maxLength ? row.childElementCount : maxLength;
        }, 0);
    }

    // Static method to parse individual cells
    static parseCell(tableCell) {
        let parseValue = tableCell.textContent.trim();
        // Escape double quotes by doubling them up
        parseValue = parseValue.replace(/"/g, `""`);
        // Wrap value in quotes if it contains commas or quotes
        if (parseValue.includes(",") || parseValue.includes("\"")) {
            parseValue = `"${parseValue}"`;
        }
        return parseValue;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const datatable = document.getElementById("datatable");
    const btnExporterCsv = document.getElementById("btnexportcsv");

    btnExporterCsv.addEventListener("click", () => {
        const exporter = new TableCsvExport(datatable);
        const csvOutput = exporter.convertCsv();
        const csvBlob = new Blob([csvOutput], { type: "text/csv" });
        const blobUrl = URL.createObjectURL(csvBlob);
        const anchorElement = document.createElement("a");
        anchorElement.href = blobUrl;
        anchorElement.download = "table-export.csv";
        anchorElement.click();
        setTimeout(() => {
            URL.revokeObjectURL(blobUrl);
        }, 500);
    });
});
