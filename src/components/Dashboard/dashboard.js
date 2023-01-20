import "../styles/Dashboard/dashboard.scss";


const Dashboard = ({user, setUser}) => {

    return(
        <div className="dashboard-wrapper">
            <div className="dashboard-header">
                <h1>Home</h1>
                <div className="feed">
                    <a>For you</a>
                    <a>Following</a>
                </div>
            </div>
            {/* MessageBox */}
            <div className="content">
                {/* tweets */}
            </div>
        </div>

    )

}

export default Dashboard