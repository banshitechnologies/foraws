import { Clear, CommentBankOutlined, DashboardCustomizeOutlined, DensitySmall, ProductionQuantityLimitsOutlined, RoomServiceOutlined, Shop2Outlined, VerifiedUserOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css';
import Logo from '../assets/logo_white.png'
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const togle = ()=>{
        setIsOpen(!isOpen);
    }
    const CreateMenu = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <DashboardCustomizeOutlined />
        },
        {
            path: '/about',
            name: 'About',
            icon: <VerifiedUserOutlined />
        },
        {
            path: '/products',
            name: 'Product',
            icon: <Shop2Outlined />
        },
        {
            path: '/comments',
            name: 'Comments',
            icon: <CommentBankOutlined />
        },
        {
            path: '/productlist',
            name: 'Product List',
            icon: <ProductionQuantityLimitsOutlined />
        },
        {
            path: '/myservices',
            name: 'My Servises',
            icon: <RoomServiceOutlined />
        }
    ]
    return (
        <div>
            <div className="sidebar_main">
                <div className="sidebar" style={{width: isOpen ? "300px" : "65px"}}>
                    <div className="top_section">
                    <div className="logo">
                    <img src={Logo} alt="logo" style={{display: isOpen ? "block" : "none"}} className="logo"/>
                    </div>
                        
                        <div className="bars">
                            {
                                isOpen ? <Clear onClick={togle}/> : <DensitySmall onClick={togle}/>
                            }
                        </div>
                    </div>

                    {
                        CreateMenu ? CreateMenu.map((item, index) => (
                            <Link to={item.path} key={index} className="link">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text" style={{display: isOpen ? "block" : "none"}}>{item.name}</div>
                            </Link>
                        )) : ""
                    }
                </div>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Sidebar;
