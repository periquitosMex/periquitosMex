import React from 'react';
import cx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { NavLink } from 'react-router-dom';

const GroupCardStyle = styled.div`
  .cardTitle {
    text-align: center;
  }
  .logo {
    margin: 0.5rem auto;
    width: 120px;
    height: 130px;
    background-size: contain;
    background-position: center center;
  }
`;

export default function GroupCard({ grupo, i }) {
  const shadowStyles = useSoftRiseShadowStyles();
  const pageLink = grupo.id;

  console.log(pageLink === 1);

  return (
    <GroupCardStyle>
      <Card variant="outlined" className={cx(shadowStyles.root)}>
        {pageLink === 1 ? (
          <NavLink to="PeriquitosMex">
            {i >= 0 && (
              <CardHeader
                title={grupo.name.toUpperCase()}
                className="cardTitle"
              />
            )}
            {i >= 0 && <CardMedia image={grupo.logo} className="logo" />}
          </NavLink>
        ) : (
          <a href={grupo.url} target="_blank" rel="noreferrer">
            {i >= 0 && (
              <CardHeader
                title={grupo.name.toUpperCase()}
                className="cardTitle"
              />
            )}
            {i >= 0 && <CardMedia image={grupo.logo} className="logo" />}
          </a>
        )}
      </Card>
    </GroupCardStyle>
  );
}
