import React from 'react'
import {Collapse} from 'antd';

const {Panel} = Collapse

const RecentView = ({userRecentView}) => {
    const renderRecentView = () =>
        userRecentView && userRecentView.map((view,index)=>(
            <div key={`${view._id}+${index}`}
            style={{margin:'16px', padding:'16px',
                    border:'0.1px solid gray',borderRadius:'16px',
                    alignItems:'center'}}>
            <a href={`/product/${view._id}`}><img style={{maxWidth:'300px',height:'200px'}}src={`http://192.168.0.92:5000/${view.images[0]}`}/></a>
                <span style={{fontSize:'10x',color:'darkgray'}}>{view.title}</span>
            </div>
        ))
    
    
    return (
        <div style={{width:'80%',margin:'2rem auto'}}>
            <Collapse accordion={true} bordered>
             <Panel header="최근 본 게시물" key="1">
                 <div style={{width:'100%',display:'flex',flexWrap:'nowrap',overflow:'auto'}}>
                   {renderRecentView()}
                 </div>

             </Panel>
            </Collapse>
        
        </div>
    )
}

export default RecentView
