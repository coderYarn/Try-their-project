enum STATUS{
  PADDING='padding',
  FULFILLED='fulfilled',
  REJECTED='rejected'
}
export default class Commitment{
  status: STATUS;
  result: any;
  constructor(func:Function){
    this.result = null;
    this.status = STATUS.PADDING
    try {
      func(this.resolve.bind(this),this.reject.bind(this));
    } catch (error) {
      this.reject(error)
    }
  }
  resolve(result){
    if(this.status===STATUS.PADDING){
      this.status = STATUS.FULFILLED
      this.result=result
    }
  }
  reject(result){
    if(this.status===STATUS.PADDING){
      this.status = STATUS.REJECTED
      this.result=result
    }
  }
  then(onFULFILLED,onREJECTED?){
    if(this.status === STATUS.FULFILLED){
      onFULFILLED(this.result)
    }
    if(this.status === STATUS.REJECTED){
      onREJECTED(this.result)
    }
  }
}
