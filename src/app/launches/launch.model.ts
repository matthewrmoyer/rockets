export class Launch {
    static instances = 0;
    static launchList = []
    constructor(
        public id: number,
        public name: string,
        public windowStart: string,
        public windowEnd: string,
        public streamUrls: string[],
        public infoUrls: string[],
        public status,
        public holdReason,
        public failReason,
        public location: object,
        public missions: object[],
        public rocket: any,
    ) {
        const duplicate = Launch.launchList.find(dup => {
            return dup.id === this.id;
        })
        if (!duplicate) {
            Launch.instances++
            Launch.launchList.push(this)
        }
        console.log(Launch.launchList)
    }
}
