/**
 *
 * EditRelations
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { get, map } from 'lodash';

// Components.
import SelectOne from 'components/SelectOne';
import SelectMany from 'components/SelectMany';

import styles from './styles.scss';

const filterRelationsUpload = (data) => Object.keys(data).reduce((acc, current) => {
  if (get(data, [current, 'plugin']) !== 'upload') {
    acc[current] = data[current];
  }

  return acc;
}, {});

function EditRelations(props) {
  return (
    <div className={styles.editFormRelations}>
      {map(filterRelationsUpload(props.schema.relations), (relation, key) => {
        if (relation.nature.toLowerCase().includes('morph') && relation[key]) return '';

        if(['oneWay', 'oneToOne', 'manyToOne', 'oneToManyMorph', 'oneToOneMorph'].includes(relation.nature)) {
          return (
            <SelectOne
              currentModelName={props.currentModelName}
              key={key}
              record={props.record}
              relation={relation}
              schema={props.schema}
              setRecordAttribute={props.changeData}
              location={props.location}
              onRedirect={props.onRedirect}
            />
          );
        } 
        
        return (
          <SelectMany
            currentModelName={props.currentModelName}
            key={key}
            record={props.record}
            relation={relation}
            schema={props.schema}
            location={props.location}
            onAddRelationalItem={props.onAddRelationalItem}
            onRedirect={props.onRedirect}
            onRemoveRelationItem={props.onRemoveRelationItem}
            onSort={props.onSort}
          />
        );
      })}
    </div>
  );
}

EditRelations.defaultProps = {
  record: {},
  schema: {},
};

EditRelations.propTypes = {
  currentModelName: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  onAddRelationalItem: PropTypes.func.isRequired,
  onRedirect: PropTypes.func.isRequired,
  onRemoveRelationItem: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  record: PropTypes.object,
  schema: PropTypes.object,
};

export default EditRelations;
