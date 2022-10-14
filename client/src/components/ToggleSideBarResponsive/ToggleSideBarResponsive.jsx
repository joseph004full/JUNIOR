import React from 'react';
import { useLocation } from 'react-router-dom';
import Filter from '../SVG/Filter';
import s from './ToggleSideBarResponsive.module.css';

export default function ToggleSideBarResponsive({ showSideBar, handler }) {

  const location = useLocation();

  let isActive = function() {
    return location.pathname === '/projects';
  }

  if (isActive()) return (
    <div className={showSideBar ? s.notShowSidebar : s.showSidebar }>
      <button className = {s.btnShowSidebarResponsive} onClick = {handler}>
        <Filter />
        <span className = {s.spanInfo}>Options</span>
      </button>
    </div>
  );
}
