from django import forms

from apps.base.utils.decorators import filter_data_by_field
from apps.preview.models import PreBundle
from apps.words.models import Article, Language


class PreWordForm(forms.ModelForm):
    class Meta:
        model = PreBundle
        fields = "__all__"

    @filter_data_by_field(
        destination_class=Article,
        destination_field_name="article",
        source_class=Language,
        source_field_name="language",
        dependency_field_name="articles",
    )
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
