import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlocServiceService {
  constructor() {}

  getSegmentsForOneBloc(byte: number): any {
    let segment = []
    for (let i=0; i<7; i++) {
      segment.push(this.isBitIn(this.getPositionInByteFromPositionInBloc(i), byte));
    }
    return segment;
  }

  getPositionInByteFromPositionInBloc(position: number): number {
    return [6, 1, 5, 0, 2, 4, 3][position];
  }

  isBitIn(position: number, byte: any): boolean {
    return (byte & 2**position) === 2**position;
  }


}
