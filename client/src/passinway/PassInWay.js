import { makeAutoObservable } from "mobx";

export default class PassInWay {
  constructor() {
    this._events = [];
    this._owners = [];
    this._readers = [];
    this._worksites = [];
    this._subdivisions = [];
    this._jobdegrees = [];
    makeAutoObservable(this);
  }

  setEvents(events) {
    this._events = events;
  }

  get events() {
    return this._events;
  }

  setReaders(readers) {
    this._readers = readers;
  }

  get readers() {
    return this._readers;
  }

  setOwners(owners) {
    this._owners = owners;
  }

  get owners() {
    return this._owners;
  }

  setWorksites(worksites) {
    this._worksites = worksites;
  }

  get worksites() {
    return this._worksites;
  }

  setSubdivisions(subdivisions) {
    this._subdivisions = subdivisions;
  }

  get subdivisions() {
    return this._subdivisions;
  }

  setJobdegrees(degrees) {
    this._jobdegrees = degrees;
  }

  get jobdegrees() {
    return this._jobdegrees;
  }
}
