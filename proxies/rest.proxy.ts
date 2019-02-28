import {Filter} from '../filter';

export class RestProxy<T> {
    constructor(resourcePath: string, public http, private baseUrl: string) {
    }

    getMany(filterCollection: Filter | any[]): Promise<T[]> {
        if (!(filterCollection instanceof Filter)) filterCollection = new Filter(filterCollection);
        return this.http.get(`${this.buildPath()}/${this.buildParams(filterCollection)}`);
    }

    getOne(idProperties): Promise<T> {
        return this.http.get(`${this.buildPath(idProperties)}`)
    }

    deleteOne(idProperties: string | string[], data: T): any {
        return this.http.delete(`${this.buildPath(idProperties)}`;
    }

    saveOne(idProperties: string | string[], data): Promise<T> {
        const method = idProperties? 'post': 'put';

        return this.http[method](`${this.buildPath(idProperties)}`, null, data);
        // return Promise.resolve();
    }


    updateOne(idProperties: string | string[], data): Promise<T> {
        return this.http.patch(`${this.buildPath(idProperties)}`, null, data);
        // return Promise.resolve();
    }

    getTotalCount(): Promise<number> {
        // ToDo ...
        return Promise.resolve();
    }


    private buildPath(idProperties: undefined | string | string[]): string {
        return this.baseUrl + '';
    }

    private buildParams(filter: Filter): string {
        return '';
    }
}