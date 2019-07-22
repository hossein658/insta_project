export interface IReport {
  id?: number;
  name?: string;
  logoContentType?: string;
  logo?: any;
  createdTime?: number;
  updatedTime?: number;
}

export class Report implements IReport {
  constructor(
    public id?: number,
    public name?: string,
    public logoContentType?: string,
    public logo?: any,
    public createdTime?: number,
    public updatedTime?: number
  ) {}
}
