module.exports={
    get:()=>{
        get({
            url:'item/store'
        },(d)=>{
            v.item.StoreItems=d.data;
        })
        get({
            url:'item/bag'
        },(d)=>{
            v.item.BagItems=d.data;
        })
    },
    getBagItem:(id)=>{
        get({
            url:'item/item',
            data:{
                id
            }
        },(d)=>{
            v.item.dialog=d.data;
        })
    },
    getWorkItem:(i)=>{
        try {
            i.options=JSON.parse(i.options)
        } catch (error) {}
        console.log(v.item.dialog=i)
    },
    getStoreItem:(id)=>{
        v.item.dialog={
            item:v.item.StoreItems[id]
        }
        v.item.buynum=1;
    },
    buy:(id)=>{
        post({ 
            url:'item/buy',
            data:{
                itemId:id,
                count:v.item.buynum,
            },
            p:'itembuy'
        },(d)=>{
            v.item.dialog=null;
            v.item.useinfo=0;
            v.qh2();
        })
    },
    use:(id)=>{
        v.item.showbag=0
        v.item.useinfo={
            id,
            template:require('./item_template')[id] || ({t:'确认使用-'+v.item.StoreItems[id]?.name+'?'})
        };
    },
    tuse:(id)=>{
        if(id){
            v.item.useinfo={
                id,
                template:require('./item_template')[id] || ({})
            } 
        }
        post({
            url:'item/use',
            data:{
                itemId:v.item.useinfo.id,
                useid:v.comment.t[v.viewmode] == 2 ? v.studio.info.id : (v.comment.t[v.viewmode] == 3 ?v.forum.post.text.id: v.workview.id),
                useto:v.comment.t[v.viewmode],
                options:v.item.useinfo.template.f && eval('('+v.item.useinfo.template.f+')')
            },
            p:'item'
        },(d)=>{
            v.item.dialog=null;
            v.item.useinfo.template.a && dialog(v.item.useinfo.template.a)
            v.item.useinfo=0;
            v.qh2();
        })
    },
    getwork:(id)=>{
        get({
            url:'item/work',
            data:{
                id: v.workview.id
            }
        },(d)=>{
            v.item.workItems=d.data;
        })
    },
    useinfo:null,
    showbag:0,
    buynum:1,
    dialog:null,
    BagItems:[],
    workItems:[],
    StoreItems:[],
}