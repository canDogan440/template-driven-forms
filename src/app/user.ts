export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: number,
    public passsword: string,
    public interestedTopic: string,
    public timePreference: string,
    public sendOffers: boolean
  ) {}
}
