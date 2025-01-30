import * as React from 'react';
import {menuItem, movieTypes} from '../../../constants'
import { ListItem, ListItemButton, ListItemText, Link, Box, Divider, List } from '@mui/material';
import { Link as RouterLink} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Typebar() {
    const { t } = useTranslation(); // Получение функции перевода
  
  return (
      <Box sx={{display: 'flex', flexDirection: 'column', height: '300px', }}> 
        <List>
        {movieTypes.map(col => 
          <Link key={col.url} component={RouterLink} to={col.url}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={t(col.url) }/>
              </ListItemButton>
            </ListItem>
          </Link>
        )}
        </List>
        <Divider />
        <List>
        {menuItem.map(col => 
          <Link key={col.url} component={RouterLink} to={col.url}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={ t(col.value) 

                }/>
              </ListItemButton>
            </ListItem>
          </Link>
        )}
        </List>
      </Box>
  )
}
