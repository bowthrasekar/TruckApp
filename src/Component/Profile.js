import Header from "./Header";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Profie() {
    const personalHeadings = [{ "FullName": "Full Name" }, { "DOB": "DOB" }, { "Gender": "Gender" }];
    const contactheadings = [{ "Email": "Email" }, { "Mobile": "Mobile" }, { "Address": "Address" }];
    const username = localStorage.getItem('username') ? localStorage.getItem('username').toUpperCase() : "";
    const data = {
        "FullName": "Bowthra Sekar",
        "DOB": "10-Feb-1995",
        "Gender": "Male",
        "Email": "bowthra@gmail.com",
        "Mobile": "985236521",
        "Address": "Salem"
    }
    return <div>
        <Header />
        <div style={{ display: "flex" }}>
            <div style={{ marginTop: "2%", marginLeft: "2%" }}>
                <img src="/images/male.jpg" alt="Avatar" style={{ width: "120px", borderRadius: "50%" }}></img>
                <div style={{ marginTop: "3%", marginLeft: "25%" }}><span style={{ fontWeight: "bold" }}>{username}</span></div>
            </div>
            <div style={{ marginTop: "3%", marginLeft: "3%" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={3}><span style={{ fontWeight: "bold" }}>Personal Details</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {personalHeadings.map((i) => {
                                return <TableRow
                                    key={"name"}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell width={"40%"}>
                                        {Object.values(i)}
                                    </TableCell>
                                    <TableCell align="left">{data[Object.keys(i)]}</TableCell>
                                    <TableCell align="left"><a href="javascript.void(0)"><img alt="edit" src="/images/edit.png" style={{ width: "30px", height: "20px" }} /></a></TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TableContainer component={Paper} style={{ marginTop: "2%" }}>
                    <Table sx={{ minWidth: 500 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={4}><span style={{ fontWeight: "bold" }}>Wallet/Card Details</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                key={"name"}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell colSpan={3}>
                                    <div style={{ fontWeight: "bold", color: "grey" }}>Your Wallet Balance</div>
                                </TableCell>
                                <TableCell colSpan={3}>
                                    <div style={{ fontWeight: "bold", color: "red" }}>INR 100</div>
                                </TableCell>
                            </TableRow>
                            <div style={{ width: "100px", marginLeft: "200%" }}><span style={{ fontWeight: "bold", color: "grey" }}>Saved Cards</span></div>
                            <TableRow
                                key={"name"}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell width={"1%"}>
                                    <img alt="master" src="/images/master.png" style={{ width: "50px" }}></img>
                                </TableCell>
                                <TableCell align="left">244XXXXXXX455</TableCell>
                                <TableCell align="left">12/2025</TableCell>
                                <TableCell align="left"><a href="javascript.void(0)"><img alt="delete" src="/images/delete.jpg" width={"20px"} /></a></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div style={{ marginTop: "3%", marginLeft: "3%", marginRight: "2%" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={3}><span style={{ fontWeight: "bold" }}>Contact Details</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contactheadings.map((i) => {
                                return <TableRow
                                    key={"name"}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell width={"40%"}>
                                        {Object.values(i)}
                                    </TableCell>
                                    <TableCell align="left">{data[Object.keys(i)]}</TableCell>
                                    <TableCell align="left"><a href="javascript.void(0)"><img alt="edit" src="/images/edit.png" style={{ width: "30px", height: "20px" }} /></a></TableCell>
                                </TableRow>
                            })}
                        </TableBody>

                    </Table>
                </TableContainer>

                <TableContainer component={Paper} style={{ marginTop: "2%" }}>
                    <Table sx={{ minWidth: 500 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={3}><span style={{ fontWeight: "bold" }}>Security Details</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                key={"name"}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell width={"40%"}>
                                    Password
                                </TableCell>
                                <TableCell align="left"><input type="password" value="sddsdSD1234" /></TableCell>
                                <TableCell align="left"><a href="javascript.void(0)"><img alt="edit" src="/images/edit.png" style={{ width: "30px", height: "20px" }} /></a></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    </div>

}

export default Profie;