export class Launch {
    static instances = 0;
    static launchList = []
    static easyLinks = []
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
        public easyLink: string
    ) {
        const duplicate = Launch.launchList.find(dup => {
            return dup.id === this.id;
        })
        if (!duplicate) {
            Launch.instances++
            Launch.launchList.push(this)
            Launch.easyLinks.push(this.easyLink)
        }
        console.log(Launch.launchList)
    }
}
