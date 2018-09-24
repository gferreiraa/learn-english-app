export class Heart {
  constructor(
    public full: boolean,
    public urlFullHeart: string = 'heartFull',
    public urlEmptyHeart: string = 'emptyHeart') {
  }

public existHeart() {
  if (this.full) {
    return this.urlFullHeart;
  } else {
    return this.urlEmptyHeart;
  }
}
}
