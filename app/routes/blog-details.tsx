import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Link } from "react-router";

function BlogDetails() {
  return (
    <div className={"p-5 px-40 mt-20"}>
      <Link
        to={"/blog"}
        className={"flex hover:text-muted-foreground items-center"}
        viewTransition
      >
        <ArrowLeft size={20} className={"cursor-pointer inline "} />{" "}
        <span>Go Back</span>
      </Link>
      <h1 className={"text-4xl font-bold pt-8 sm:text-5xl"}>Title</h1>
      <p className="text-muted-foreground text-lg text-pretty mb-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        veritatis, maxime, rem officiis quas adipisci et saepe totam, quidem
        minus veniam? Id quidem officiis nemo architecto praesentium. Excepturi,
        alias dignissimos!
      </p>
      <hr className="my-8"/>
      <p className={""}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        illum omnis sint veniam voluptatibus. Ad architecto aspernatur culpa
        dignissimos eos error eveniet laboriosam maxime, modi mollitia placeat
        possimus provident, repudiandae! lorem ipsum dolor sit amet, consectetur
        adipisicing elit. cum, cumque earum eveniet ipsam ipsum, itaque iusto
        magnam minima minus neque non nostrum numquam officia perspiciatis quis
        quos sapiente similique tempora! lorem ipsum dolor sit amet, consectetur
        adipisicing elit. ad animi eligendi nemo odio rem? accusantium amet
        assumenda deserunt doloremque error facilis ipsa, iure qui quibusdam,
        saepe sequi sit, soluta veritatis!lorem lorem ipsum dolor sit amet,
        consectetur adipisicing elit. accusamus consequuntur dolor incidunt
        itaque nihil odio omnis optio quidem! aliquid corporis cupiditate
        deserunt eligendi enim eveniet, inventore nihil nobis porro quasi.
      </p>
      <p>
        <span>
          lorem ipsum dolor sit amet, consectetur adipisicing elit. a aperiam
          necessitatibus qui tempore! amet animi atque dolor ex expedita illum,
          nobis praesentium provident quasi quos sequi similique sint, soluta,
          voluptate.
        </span>
        <span>
          asperiores dignissimos, eaque excepturi, hic nam nostrum obcaecati
          pariatur quaerat quia rerum similique ut? consequuntur deserunt,
          dolore ipsa maiores maxime minima molestias, nulla obcaecati possimus
          quia sequi tenetur ut veritatis!
        </span>
        <span>
          enim nesciunt obcaecati odit sit? fuga, illum, iusto? a amet assumenda
          consectetur cupiditate dicta distinctio eum excepturi inventore,
          libero maiores nisi, odio, perspiciatis possimus quas quidem
          reiciendis sit tempora veritatis!
        </span>
        <span>
          aliquid delectus eaque earum facilis ipsum iure magni molestiae
          molestias nam pariatur porro quasi, recusandae rem temporibus,
          voluptatibus? delectus doloremque doloribus, est ex ipsum maiores modi
          quidem similique temporibus ut?
        </span>
        <span>
          aliquid consequuntur, cupiditate debitis deserunt ea id ipsa laborum,
          molestiae nam, nemo ratione tempore voluptatibus voluptatum. aliquam
          aperiam consequatur dolores ea est facilis fugit rem sed. assumenda
          inventore placeat voluptate.
        </span>
      </p>
    </div>
  );
}

export default BlogDetails;
