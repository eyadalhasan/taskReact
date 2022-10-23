
import React from 'react';
import "./form.css"
class Form extends React.Component{
Arr =[];


    constructor(props){
        super()
       this.x=-1;
       this.ed='';
this.d=0
        this.state={
            title:'',
            desc:'',
            btn:'add',
ed:'',
            arr:[]
        }
    }
    f(e){
   
        e.preventDefault();
    }
f1(e){
    
    this.e1=e
    this.setState({title:e.target.value})

}
f2(e){
    this.e2=e
    this.setState({desc:e.target.value})

}
async edit(e,i){
    this.ed=e;
     await this.setState({btn:'update'})


}
update(i){
this.Arr[this.state.ed]=<div key={this.state.ed} className={"form"}>
<p>{this.state.title}</p>
<p>{this.state.desc}</p>
<br />
<button onClick={this.edit.bind(this,this.i)}>Edit </button>
<button>Delete </button>
</div>
 
 this.setState({arr:this.Arr});
}
 async Del(e){
    this.d++;
console.log(e+"delete")
 this.Arr=this.Arr.map((item,index)=>{
if(!(item?.key==e))
{
console.log(item)
return item
}

}

)
console.log(this.Arr)
await this.setState({arr:this.Arr});
}

async add(e,x){
if(this.state.btn=='update'){
this.Arr[this.ed]=<div key={this.ed} className={"form"}>
<p>{this.state.title}</p>
<p>{this.state.desc}</p>
<br />
<button onClick={this.edit.bind(this,this.ed)}>Edit </button>
<button onClick={this.Del.bind(this,this.ed)}>Delete </button>
</div>

   await this.setState({arr:this.Arr,btn:'Add'})
    }
    
    else {
this.x++;


this.a=e
this.Arr.push(
<div key={this.x} className={"form"}>
    <p>{this.state.title}</p>
    <p>{this.state.desc}</p>
    <br />
<button onClick={this.edit.bind(this,this.x)}>Edit </button>
<button onClick={this.Del.bind(this,this.x)}>Delete </button>
</div>);


}


this.setState({arr:this.Arr})
this.e1.target.value='';
this.e2.target.value=''
}

reset(){
if(!(this.e1.target.value==''&&this.e2.target.value==''))
this.e1.target.value='';
this.e2.target.value='';
}


render(){

return (
    

<div>
    <form action="" onSubmit={this.f.bind(this)}>
<label htmlFor="" >Title</label>
<input type="text" placeholder='Title' onChange={this.f1.bind(this)} />

<label htmlFor="">Descritption</label>
<br />
<textarea name="" id="" cols="30" rows="10" placeholder='Descritption' onChange={this.f2.bind(this)}></textarea>

<input type="button"  onClick={this.add.bind(this)} value={this.state.btn}/>

<input type="button"  onClick={this.reset.bind(this)} value={'Reset'}/>
<hr />
<div>{this.state.arr}</div>

</form>
</div>


    )
   

}
}

export default Form