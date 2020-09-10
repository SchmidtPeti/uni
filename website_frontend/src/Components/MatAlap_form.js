import React from 'react';
import {Form,Button} from 'react-bootstrap';



const MatAlap_form = () => {
    return (
      <div className='whole_form'>
        <Form>
        <Form.Group controlId="taskDescription_id">
          <Form.Label>Feladat leírása</Form.Label>
          <Form.Control as="textarea" placeholder="A feladat leírása..." />
        </Form.Group>
        <Form.Group controlId="topic_id">
          <Form.Label>Téma</Form.Label>
          <Form.Control type="text" placeholder="Milyen témákörben a feladat(Algebra,Valőszínűség)" />
        </Form.Group>
        <Form.Group controlId="task_level_id">
          <Form.Label>Milyen szinten vannak a kérdések?</Form.Label>
          <Form.Control as="select">
            <option>Középiskola</option>
            <option>Bsc</option>
            <option>Msc</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="solutation_id">
          <Form.Label>Megoldás</Form.Label>
          <Form.Control type="text" placeholder="Mi a megoldás?" />
        </Form.Group>
        <Form.Group controlId="major_id">
          <Form.Label>Szak</Form.Label>
          <Form.Control type="text" placeholder="Milyen szak előadásán fordult elő?" />
        </Form.Group>
        <Form.Group>
          <Form.File id="stepbystep_img" label="Egy kép a részletes megoldásról" />
        </Form.Group>
        <Form.Group controlId="source_id">
          <Form.Label>Forrás</Form.Label>
          <Form.Control type="text" placeholder="Egy link ahol a doksi volt(legjobb ha valamilyen egyetemes oldal elte./corvinus.)" />
        </Form.Group>
      </Form>
      <Form.Group controlId="hardness_id">
              <Form.Label>Mennyi időt vett a fel feladat(az egységek relativitást jelölnek)</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>         
              </Form.Control>
            </Form.Group>
      <Form.Group controlId="hardness_id">
              <Form.Label>Milyen nehéznek itéled a feladatot(nagyobb nehezebb)</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>         
              </Form.Control>
            </Form.Group>
      <Button type="submit" className="mb-2">
            Feltöltés!
      </Button>
      </div>
    )
}
export default MatAlap_form;