import {SimpleRepository} from './abstractsimpleRepository';
import {RestProxy} from './proxies/rest.proxy';
import {Filter} from './filter';

export class ContractOccupancyRepository extends SimpleRepository { // angular service
    constructor(http) {
        super(new RestProxy('contracts/:id:/occupancies/:id2:', http, baseUrl));
    }

    doSpecialStuff(filter: Filter) {
        //return this.getMany(Filter).then()
    }

}