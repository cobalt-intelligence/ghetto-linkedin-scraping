# Ghetto LinkedIn Scraping

This package shows some basic ways to get title and name from a company's LinkedIn people page. This would be if you wanted to get a list of certain kind of employees from a specific company.

## Getting Started

Clone the repository and run `npm i`.

You'll want to go to the target company's LinkedIn people page. Add the facets you want (keyword, locations, etc) and then scroll down until you hit the end. Open dev tools and type `copy($('body').innerHTML);`. This will copy all of that page's HTML to your clipboard.

Create a file in `./src` and export that huge string to a `const`, similar to how I did with the `twitch.ts` file. This will be the HTML that you will load into cheerio.

[Video Guide](https://youtu.be/2x63EU-ZigQ)

### Prerequisites

Tested on Node v14.17.5 and NPM v6.14.14.

### Installing

After installing [NodeJS](https://nodejs.org/en/) you should be able to just run the following in the terminal.

```
npm i
```

## Built With

* [json2csv](https://github.com/zemirco/json2csv) - Converts JSON to CSVs
* [NodeJS](https://nodejs.org/en/) - NodeJS
* [cheerio](https://cheerio.js.org/) - cheerio for html parsing

## Authors

* **Jordan Hansen** - *Initial work* - [Jordan Hansen](https://github.com/aarmora)


## License

This project is licensed under the ISC License
