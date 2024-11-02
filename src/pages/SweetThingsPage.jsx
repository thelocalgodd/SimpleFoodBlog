import BaseLayout from "../layout/BaseLayout";

function SweetThingsPage() {
  return (
    <BaseLayout>
      <main>
        <div>
          <p className="home-header">Sweet things</p>
        </div>

        <p className="quote-icon">{'"'}</p>

        <div className="intro-text">
          <p>
            My 93-year-old grandma is a beautiful example of healthy living. She
            laughs a lot and always says, ‘Just be yourself!’ She also eats
            dessert every single day.
            <br />
            <span>Rachel Boston</span>
          </p>
        </div>

        <div className="secondary-text">
          <p>
            Here’s some delicious sweet things to cook and eat, with much joy
            and no guilt! Recipe links below.
          </p>
        </div>
      </main>
    </BaseLayout>
  );
}

export default SweetThingsPage;
