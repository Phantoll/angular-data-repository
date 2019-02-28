export abstract class SimpleRepository {
    protected constructor(private proxy) {
    }

    getMany(...args) {
        return this.proxy.getMany(args);
    }

    getOne(...args) {
        return this.proxy.getOne(args);
    }

    deleteOne(...args) {
        return this.proxy.deleteOne(args);
    }

    saveOne(...args) {
        return this.proxy.saveOne(args);
    }

    updateOne(...args) {
        return this.proxy.updateOne(args);
    }

    getTotalCount(...args) {
        return this.proxy.getTotalCount(args);
    }
}