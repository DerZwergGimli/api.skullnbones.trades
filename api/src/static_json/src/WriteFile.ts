import fs from "fs";

export function write_file(path: string, object: any) {
  fs.writeFile(path, JSON.stringify(object, null, 4), function (err) {
    if (err) throw err;
    console.log("complete");
  });
}
