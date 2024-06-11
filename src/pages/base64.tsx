import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

const Base64 = () => {
  return (
    <div className="grid place-items-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Base64 - Key to Master</CardTitle>
        </CardHeader>
        <CardContent className="text-justify">
          In computer programming, Base64 is a group of binary-to-text encoding
          schemes that transforms binary data into a sequence of printable
          characters, limited to a set of 64 unique characters. More
          specifically, the source binary data is taken 6 bits at a time, then
          this group of 6 bits is mapped to one of 64 unique characters. As with
          all binary-to-text encoding schemes, Base64 is designed to carry data
          stored in binary formats across channels that only reliably support
          text content.
          <br /> Base64 is particularly prevalent on the World Wide Web where
          one of its uses is the ability to embed image files or other binary
          assets inside textual assets such as HTML and CSS files. Base64 is
          also widely used for sending e-mail attachments, because SMTP – in its
          original form – was designed to transport 7-bit ASCII characters only.
          Encoding an attachment as Base64 before sending, and then decoding
          when received, assures older SMTP servers will not interfere with the
          attachment.
          <br /> Base64 encoding causes an overhead of 33–37% relative to the
          size of the original binary data (33% by the encoding itself; up to 4%
          more by the inserted line breaks).
        </CardContent>
        <CardFooter>
          <Link
            className="border border-primary p-2 rounded-xl hover:bg-primary hover:text-secondary"
            to="/quest/$id"
            params={{ id: "ExJdi2kPBclGsaKyPMNu" }}
          >
            Go Back
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Base64;
