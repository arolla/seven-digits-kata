import { TestBed } from '@angular/core/testing';

import { BlocServiceService } from './bloc-service.service';

describe('BlocServiceService', () => {
  let service: BlocServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have no sgement on given null input', () => {
    expect(service.getSegmentsForOneBloc(0)).toEqual([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
  });

  it('should have middle segment on given 1 as input', () => {
    expect(service.getSegmentsForOneBloc(1)).toEqual([
      false,
      false,
      false,
      true,
      false,
      false,
      false,
    ]);
  });

  it('should have middle & upper left segment on given 3 (0b0000011) as input', () => {
    expect(service.getSegmentsForOneBloc(3)).toEqual([
      false,
      true,
      false,
      true,
      false,
      false,
      false,
    ]);
  });

  it('should have a E when sending 79', () => {
    expect(service.getSegmentsForOneBloc(79)).toEqual([
      true,
      true,
      false,
      true,
      true,
      false,
      true,
    ]);
  });

  it('should say that not bit in 0', () => {
    expect(service.isBitIn(0, 0)).toBeFalse();
  });

  it('should say that bit 0 is in 1', () => {
    expect(service.isBitIn(0, 1)).toBeTrue();
  });

  it('should say that bit 1 is in 2', () => {
    expect(service.isBitIn(1, 2)).toBeTrue();
  });

  it('should say that bit 0 is in 3', () => {
    expect(service.isBitIn(0, 3)).toBeTrue();
  });

  it('should say that bit 1 is not in 4', () => {
    expect(service.isBitIn(1, 4)).toBeFalse();
  });

  it('should say that bit 4 is in 18', () => {
    expect(service.isBitIn(4, 18)).toBeTrue();
  });

  it("test", () => {
    expect(0b111 & 0b010).toEqual(0b010);
  })

});
