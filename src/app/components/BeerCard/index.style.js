import styled from 'styled-components';

export const BeerCardWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    height: 150px;
    margin: 16px 0;

    &:hover {
        background: #F2F8FC;
        cursor: pointer;
    }

    img {
        float: left;
        width: 150px;
        height: 150px;
        object-fit: contain;
        padding: 16px;
    }

    .content {
        padding: 16px;
        height: 100%;
    }

    .title {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .tagline {
        color: #D7A33C;
        font-size: 12px;
        font-weight: 500;
    }

    .description {
        color: #515253;
        font-size: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`;