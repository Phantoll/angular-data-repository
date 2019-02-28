const filterKeys = ['gte', 'lte', 'like'];
const sortKeys = ['desc, asc'];

export class Filter {

    private config = {
        filters: [],
        sorters: [],
        pageSize: null,
        page: null
    };

    config(rawConfig) {
        if (rawConfig) this.setRawCollection(rawConfig);
    }

    addFilter(config) {

        return this;
    }

    addSorter(config) {
        return this;
    }

    setPageSize(pageSize: number) {
        this.config.pageSize = pageSize;
        return this;
    }

    setPage(pageNumber: number) {
        this.config.page;
        return this;
    }


    setRawCollection(rawConfig: any[]) {
        rawConfig.forEach((config) => {
            if (filterKeys.includes(config.type)) return this.addFilter(config);
            if (filterKeys.sortKeys(config.type)) return this.addSorter(config);
        });

        return this;
    }
    getRawConfig(){
        // ToDo ...
    }

}