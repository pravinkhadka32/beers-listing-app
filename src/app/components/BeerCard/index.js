import { useState } from "react";
import { Tooltip } from "reactstrap";
import { BeerCardWrapper } from "./index.style";

const BeerCard = ({ index, title, description, ingredients, tagline, image_url }) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => { setTooltipOpen(!tooltipOpen) };

    return (
        <BeerCardWrapper>
            <img id={`tooltip-${index}`} src={image_url} alt={title} />
            <Tooltip isOpen={tooltipOpen} flip target={`tooltip-${index}`} toggle={toggleTooltip}>
                ingredients: {Object.keys(ingredients).join(', ')}
            </Tooltip>
            <div className="content">
                <h3 className="title mb-2">{title}</h3>
                <p className="tagline mb-2">{tagline}</p>
                <p className="description mb-0">{description}</p>
            </div>
        </BeerCardWrapper>
    );
}

export default BeerCard;