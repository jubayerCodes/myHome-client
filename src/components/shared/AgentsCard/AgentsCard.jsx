import { Box, Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import './AgentsCard.css'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaPinterest, FaTwitter, FaVimeo, FaYoutube } from "react-icons/fa";


const AgentsCard = ({ agent }) => {


    const cardStyle = {
        boxShadow: 'rgba(7, 152, 255, 0.09) 0px 3px 5px',
        padding: '6px 6px 0'
    }

    return (
        <Card className='agent-card relative' sx={cardStyle}>

            <Link href={'#'} className='card-img'>
                <CardMedia
                    component="img"
                    alt="agent"
                    height="140"
                    // TODO: make it dynamic
                    image={agent?.photo}
                    sx={{ borderRadius: '3px' }}
                />
            </Link>
            <CardContent sx={{ padding: '16px 16px 0' }}>

                <Link href={'#'} underline='none' color={'black'} className="agent-name">
                    <Typography variant="h5" component="div" fontSize={22} fontWeight={500}>
                        {agent?.displayName}
                    </Typography>
                </Link>
                <Typography className="agent-title" marginBottom={1} variant="h6" component="div" fontSize={14} fontWeight={300} color='main'>
                    {agent?.position}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {agent?.bio?.split(' ').slice(0, 17).join(' ')}...
                </Typography>

                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box display={'flex'} marginTop={3} gap={2}>
                        <Link underline="none" className="agent-link" href={agent?.contact?.facebook}>
                            <FaFacebookF />
                        </Link>
                        <Link underline="none" className="agent-link" href={agent?.contact?.twitter}>
                            <FaTwitter />
                        </Link>
                        <Link underline="none" className="agent-link" href={agent?.contact?.linkedin}>
                            <FaLinkedin />
                        </Link>
                        <Link underline="none" className="agent-link" href={agent?.contact?.pinterest}>
                            <FaPinterest />
                        </Link>
                        <Link underline="none" className="agent-link" href={agent?.contact?.instagram}>
                            <FaInstagram />
                        </Link>
                        <Link underline="none" className="agent-link" href={agent?.contact?.youtube}>
                            <FaYoutube />
                        </Link>
                        <Link underline="none" className="agent-link" href={agent?.contact?.vimeo}>
                            <FaVimeo />
                        </Link>
                    </Box>

                    <Box display={'flex'} marginTop={3} gap={2}>
                        <Link underline="none" className="agent-link" href={agent?.contact?.email}>
                            <FaEnvelope />
                        </Link>
                        <Link underline="none" className="agent-link" href={agent?.contact?.phone}>
                            <FaPhoneAlt />
                        </Link>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AgentsCard;