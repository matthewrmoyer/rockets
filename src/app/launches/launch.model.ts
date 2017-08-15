export class Launch {
    static instances = 0;
    static launchList= []
    constructor(
        public id: number,
        public name: string,
        public windowStart: string,
        public windowEnd: string,
        public streamUrls: string[],
        public infoUrls: string [],
        public status,
        public holdReason,
        public failReason,
        public location: object,
        public missions: object[],
        public rocket: object,
        ) {
            Launch.instances++
            Launch.launchList.push(this)
        }
}
