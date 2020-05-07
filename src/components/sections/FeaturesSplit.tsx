import React from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import Image from '../elements/Image'

const Feature: (a: {subtitle: string, title: string, description: string, src: string, alt?: string, imageFill: any}) => any = ({ subtitle, title, description, src, alt = "", imageFill }) => (
  <div className="split-item">
    <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
      <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
        {subtitle}
      </div>
      <h3 className="mt-0 mb-12">
        {title}
      </h3>
      <p className="m-0">
        {description}
      </p>
    </div>
    <div className={
      classNames(
        'split-item-image center-content-mobile reveal-from-bottom',
        imageFill && 'split-item-image-fill'
      )}
      data-reveal-container=".split-item">
      <Image
        src={src}
        alt={alt}
        width={528}
        height={396} />
    </div>
  </div>
)

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}: any) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  )

  const sectionHeader = {
    title: "We're Here To Protect",
    paragraph: 'Our main goal is to protect you and everyone you love, whilst at the same time minimizing societal and economical impact.'
   }

  const featureData = [
    {
      title: "Personal Risk Prediction",
      subtitle: "Know When You're At Risk",
      description: "We continuously apply machine learning to compute an individual risk profile for every user. This risk profile indicates how likely it is that an individual is infected or will be in the near future.",
      src: require('./../../assets/images/features-split-image-01.png'),
    },
    {
      title: "Population Trends",
      subtitle: "See The Bigger Picture",
      description: "All individual data is aggregated to track and predict the development of the decease on regional and national scale. This allows businesses and governments to stay ahead of the curve and act as effectively as possible.",
      src: require('./../../assets/images/features-split-image-02.png'),
    },
  ]

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            {featureData.map(data => <Feature imageFill={imageFill} {...data} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesSplit.propTypes = propTypes
FeaturesSplit.defaultProps = defaultProps

export default FeaturesSplit