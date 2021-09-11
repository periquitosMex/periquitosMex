import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import grupos from '../../assets/data/Grupos';
import GroupCard from '../GlobalComponents/GroupCard';

const GridItemStyle = styled.div`
  margin-top: 3rem;
`;

export default function GridItem() {
  return (
    <GridItemStyle>
      <Grid container spacing={2}>
        {grupos.map((grupo, i) => (
          <Grid item xs={12} sm={6} md={4} key={grupo.id}>
            <GroupCard key={grupos.id} grupo={grupo} i={i} />
          </Grid>
        ))}
      </Grid>
    </GridItemStyle>
  );
}
