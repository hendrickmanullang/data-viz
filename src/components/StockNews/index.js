import { Button, Card, CardContent, Typography, CardActions } from "@mui/material"

const StockNews = ({title, url}) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
        <CardActions>
          <Button size="small" href={url}>Read More</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default StockNews
