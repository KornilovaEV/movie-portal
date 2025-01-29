import * as React from 'react';
import {menuItem, movieTypes} from '../../../constants'
import { ListItem, ListItemButton, ListItemText, Link, Box, Divider, List } from '@mui/material';
import { Link as RouterLink} from 'react-router-dom';

export default function Typebar() {
  return (
      <Box sx={{display: 'flex', flexDirection: 'column', height: '300px', }}> 
        <List>
        {movieTypes.map(col => 
          <Link key={col.name} component={RouterLink} to={col.url}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={col.name}/>
              </ListItemButton>
            </ListItem>
          </Link>
        )}
        </List>
        <Divider />
        <List>
        {menuItem.map(col => 
          <Link key={col.name} component={RouterLink} to={col.url}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={col.name}/>
              </ListItemButton>
            </ListItem>
          </Link>
        )}
        </List>
      </Box>
  )
}
