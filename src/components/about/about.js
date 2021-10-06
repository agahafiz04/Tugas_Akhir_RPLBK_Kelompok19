import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import "../../styles.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FFFFFF',
    borderRadius: '25px',
    p: 4,
};

const DetailPraktikan = createContext();

export default function Praktikan() {
    const [praktikan, setPraktikan] = useState([]);
    const [nama, setNama] = useState('');
    const [lengkap, setLengkap] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:8000/praktikan",
            headers: {
                accept: "*/*",
            },
        })

            .then((data) => {
                setPraktikan(data.data);
            })

            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>

            <Grid container md={20} spacing={10} style={{justifyContent: "center"}}>
                {praktikan.map((results) => {
                    return (
                        <Grid item key={results.nama} md={3}>
                            <Card>
                                <CardActionArea onClick={() => { setOpen(true); setNama(results.nama); setLengkap(results.lengkap) }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={results.gambar}
                                    />
                                    <CardContent style={{  }}>
                                        <h3>{results.nama}</h3>
                                        <h5>Nim: {results.nim}​​​​​​</h5>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
            <DetailPraktikan.Provider value={{ nama: nama, lengkap: lengkap }}>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-praktikan"
                        aria-describedby="modal-modal-detail"
                    >
                        <Detail />
                    </Modal>
                </div>
            </DetailPraktikan.Provider>
        </div >
    );
}

function Detail() {
    const info = useContext(DetailPraktikan);
    return (
        <Box sx={style}>
            <Typography id="modal-modal-praktikan" variant="h6" component="h2">
                {info.nama}
            </Typography>
            <Typography id="modal-modal-detail" sx={{ mt: 1 }}>
                Email: {info.lengkap.email}
            </Typography>
            <Typography id="modal-modal-detail" sx={{ mt: 1 }}>
                Tempat Tanggal Lahir: {info.lengkap.ttl}
            </Typography>
            <Typography id="modal-modal-detail" sx={{ mt: 1 }}>
                Hobi: {info.lengkap.hobi}
            </Typography>
            <Typography id="modal-modal-detail" sx={{ mt: 1 }}>
                Motto: {info.lengkap.motto}
            </Typography>
        </Box>
    );
}