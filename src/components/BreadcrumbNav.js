import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

function BreadcrumbNav({ currentPage }) {
  return (
    <Breadcrumb className='bg-warning text-center'>
      <Breadcrumb.Item active>{currentPage}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbNav;
