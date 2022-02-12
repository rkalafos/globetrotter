import {Card} from "../components/Card";
import {DefaultLayout} from "../layouts/DefaultLayout";
import {useParams} from "react-router-dom";

export const Race = () => {
    const { id } = useParams();
    return (
        <DefaultLayout>
            <Card>
            </Card>
        </DefaultLayout>
    );
}