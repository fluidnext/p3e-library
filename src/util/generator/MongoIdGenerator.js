/**
 * @class MongoIdGenerator
 */
export class MongoIdGenerator {
    /**
     * @inheritDoc
     */
    generate() {
        let timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    }
}
//# sourceMappingURL=MongoIdGenerator.js.map