### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Alandorn-p/merge.git
   ```
2. cd into merge directory
   ```sh
   cd merge
   ```
3. Install npm dependencies and generate files
   ```sh
   npm run setup
   ```
4. Run jest unit test using
   ```sh
   npm test
   ```


### Using the Library

Install package as dependency using:
   ```sh
   npm install path/to/merge
   ```

Import function inside file, such as:
   ```
   import { merge } from "merge";

   let array : number[] = merge([1, 3], [2])
   ```
