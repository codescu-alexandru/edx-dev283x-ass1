# Edx DEV283x course, Assessment 1

## How to execute the file

1. Checkout the source code:

```
git clone https://github.com/codescu-alexandru/edx-dev283x-ass1.git "folder/name/here"
```

2. Inside the `edx-dev283x-ass1` folder, open a command line and install all the required packages:

```
cd folder/name/here/
npm install
```

3. Run the script:

```
node csv2json.js
```

4. The resulted `customer-data.json` file will be created in the data folder.

```
cd data
cat customer-data.json
```

5. To parse the resulted JSON object just copy-paste the content of the `customer-data.json` file to an online parser. Like:
http://json.parser.online.fr/
