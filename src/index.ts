import * as json2csv from 'json2csv';
import * as fs from 'fs';
import cheerio from 'cheerio';
import { twitchHtml } from './twitch';

(async () => {
    const $ = cheerio.load(twitchHtml);

    getData($, 'Twitch software people.csv');

})();

function getData($: cheerio.Root, filename: string) {
    const people = $('.artdeco-entity-lockup__content');

    const softwarePeopleInBrazil: any[] = [];

    people.each((index: number, element: cheerio.Element) => {
        const name = $('.org-people-profile-card__profile-title', element).text().trim();
        const title = $('.artdeco-entity-lockup__subtitle', element).text().trim();
        const foundSoftwarePerson = softwarePeopleInBrazil.find(softwarePerson => softwarePerson.name === name);

        if (!foundSoftwarePerson && title.toLocaleLowerCase().includes('software') && name) {
            console.log('name', name, 'title', title);
            const lastName = name.split(' ')[1];
            const firstName = name.split(' ')[0];

            softwarePeopleInBrazil.push({
                name: name.trim(),
                title: title.trim(),
                estimatedEmail: `${lastName}_${firstName}@twitch.tv`
            });
        }
    });

    console.log('Software people in Brazil', softwarePeopleInBrazil.length);

    const csv = json2csv.parse(softwarePeopleInBrazil);
    fs.writeFileSync(filename, csv);
}
