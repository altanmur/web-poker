export class ReactionEvents {
  public type: RxEType;
  public data: any;

  public constructor(type: RxEType, data: any) {
    this.type = type;
    this.data = data;
  }
}

export enum RxEType {
  DEPOSIT_SUCCESS,
  START_IN,
  ANNOUNCEMENT,
  ROUND_START,
  BLINDS,
  CARD_DIST,
  ME_CARD_DIST
}
