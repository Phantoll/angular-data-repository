import {Filter} from './filter';
import {ContractOccupancyRepository} from './repository';

class TestComponent {
    private testPermanentFilter = new Filter();
    private testStore = [];

    constructor(private repo: ContractOccupancyRepository) {
    }

    ngOnInit() {
        this.testPermanentFilter
            .addFilter({
                type: 'gt',
                key: 'age',
                value: 4
            })
            .addFilter([
                {key: 'name', value: 'Meier'},
                {type: 'begins', key: 'surname', value: 'Ju'}
            ])
            .addSorter({
                type: 'desc',
                key: 'age'
            });

        // example FilterCollection
        this.repo
            .getMany(this.testPermanentFilter)
            .then(testStore => this.testStore = testStore);


        // example FilterRaw
        this.repo
            .getMany(
                {type: 'equal', key: '...'},  //filter
                {type: 'desc', key: '...'} // sorter
            )
            .then(testStore => this.testStore = testStore);



        const contractId = 23;
        const occupanyId = 17;
        // example getOne
        this.repo.getOne([contractId, occupanyId]).then((record) => console.log(record));
    }
}