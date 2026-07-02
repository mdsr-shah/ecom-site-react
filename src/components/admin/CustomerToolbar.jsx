const CustomerToolbar=({

search,

setSearch

})=>{

return(

<div className="toolbar">

<input

type="text"

placeholder="Search Customer..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

</div>

);

};

export default CustomerToolbar;