/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import BeerCard from '../../app/components/BeerCard';
import { BeersWrapper } from './index.style';
import actions from './store/actions';

const BeersList = ({ loading, list, pagination, fetchAll }) => {

    useEffect(() => {
        fetchAll(pagination.page, pagination.per_page);
    }, []);

    const fetchBeers = () => {
        fetchAll(pagination.page + 1, pagination.per_page);
    }

    return (
        <BeersWrapper>
            <Container>
                <Row>
                    <h4 className='title'>Beers</h4>
                    {list.map((item, index) => (
                        <Col key={index} md={6} sm={12}>
                            <BeerCard
                                index={index}
                                image_url={item.image_url}
                                title={item.name}
                                description={item.description}
                                tagline={item.tagline}
                                ingredients={item.ingredients} />
                        </Col>
                    ))}
                    <div className='text-center mt-4 mb-4'>
                        <button className='btn btn-link' onClick={fetchBeers}>Load More <ChevronDown /></button>
                    </div>
                </Row>
            </Container>
        </BeersWrapper>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchAll: (page, per_page) => dispatch(actions.fetchAll(page, per_page)),
});

const mapStateToProps = (state) => ({
    success: state.beers.success,
    loading: state.beers.loading,
    list: state.beers.list,
    error: state.beers.error,
    pagination: state.beers.pagination,
});

export default connect(mapStateToProps, mapDispatchToProps)(BeersList);