import '../../styles/Badge.css'
function getBadge(type) {
  
    if (type === 'success') {
        return 'badge badge-sucess'
    }
    else if(type === 'info'){
        return 'badge badge-info'
    }
    else {
        return 'badge badge-danger'
    }

    
}

export default function Badge ({type, label}) {

    return (
        <span className= {getBadge(type)}>
            {label}
        </span>
    )
    
}

