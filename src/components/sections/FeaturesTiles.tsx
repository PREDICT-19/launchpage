import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import Image from '../elements/Image'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Tile: (a: {src: any, imgAlt?: string, title: string, description: string, revealDelay?: number}) => any = ({ src, imgAlt = "", title, description, revealDelay = 0 }) => (
  <div className="tiles-item reveal-from-bottom" data-reveal-delay={revealDelay}>
    <div className="tiles-item-inner">
      <div className="features-tiles-item-header">
        <div className="features-tiles-item-image mb-16">
          <Image
            src={src}
            alt={imgAlt}
            width={64}
            height={64} />
        </div>
      </div>
      <div className="features-tiles-item-content">
        <h4 className="mt-0 mb-8">
          {title}
        </h4>
        <p className="m-0 text-sm">
          {description}
        </p>
      </div>
    </div>
  </div>
)

const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}: any) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  )

  const sectionHeader = {
    title: 'Data Driven Risk Prediction',
    paragraph: 'We use state of the art machine learning models to compute accurate risk predictions.'
  }

  const tileData = [
    {
      src: require('../../assets/images/feature-tile-icon-01.svg'),
      title: "Contact Tracing",
      description: "We combine your location data with Bluetooth to track who you have been in contact with.",
    },
    {
      src: require('../../assets/images/feature-tile-icon-01.svg'),
      title: "Population Medical Data",
      description: "",
    },
    {
      src: require('../../assets/images/feature-tile-icon-01.svg'),
      title: "Mobility Information",
      description: "",
    },
    {
      src: require('../../assets/images/feature-tile-icon-01.svg'),
      title: "Infection Data",
      description: "",
    },
  ]


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="more" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {Object.entries(tileData).map(([i, v]) => ({revealDelay: Number.parseInt(i)*100, ...v})).map(Tile)}
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesTiles.propTypes = propTypes
FeaturesTiles.defaultProps = defaultProps

export default FeaturesTiles